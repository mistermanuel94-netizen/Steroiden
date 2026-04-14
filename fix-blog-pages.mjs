import fs from 'fs';
import path from 'path';

const PAGES_DIR = path.join('astro-steroid', 'src', 'pages');

const blogIndexContent = `---
import Layout from '../../../layouts/Layout.astro';
import { getCollection } from 'astro:content';
import { supportedLanguages, type SupportedLanguage } from '../../../i18n/translations';
import { getMarket } from '../../../i18n/market';

const { lang: langParam } = Astro.params;
const lang = (langParam || 'en') as SupportedLanguage;

if (langParam && !supportedLanguages.includes(lang)) {
  return Astro.redirect('/');
}

const market = getMarket(lang);

let posts: any[] = [];
try {
  const allBlogPosts = await getCollection('blog');
  posts = allBlogPosts
    .filter(p => p.data.lang === lang)
    .sort((a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf());
} catch (e) {
  // Blog collection may not exist yet
}
---

<Layout title={\`Blog | Steroiden \${market.marketName}\`} description="Latest articles on steroids, bodybuilding, and performance enhancement.">
  <section style="padding: 60px 0; background: #F5F0EB; min-height: 60vh;">
    <div class="container mx-auto px-4">
      <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 24px;">Blog</h1>
      {posts.length > 0 ? (
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px;">
          {posts.map(post => (
            <article style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #E0D8D0;">
              <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">{post.data.title}</h2>
              <p style="color: #555; font-size: 14px;">{post.data.description}</p>
            </article>
          ))}
        </div>
      ) : (
        <div style="text-align: center; padding: 80px 20px;">
          <p style="color: #666; font-size: 1.1rem;">Blog articles coming soon.</p>
        </div>
      )}
    </div>
  </section>
</Layout>
`;

const blogSlugContent = `---
import Layout from '../../../layouts/Layout.astro';
import { getCollection, getEntry } from 'astro:content';
import { supportedLanguages, type SupportedLanguage } from '../../../i18n/translations';
import { getMarket } from '../../../i18n/market';

const { lang: langParam, slug } = Astro.params;
const lang = (langParam || 'en') as SupportedLanguage;

if (langParam && !supportedLanguages.includes(lang)) {
  return Astro.redirect('/');
}

const market = getMarket(lang);

// Try to find the blog post
let post: any = null;
try {
  const allPosts = await getCollection('blog');
  post = allPosts.find(p => {
    const postSlug = p.slug.replace(/^(en|nl|de|fr|es|it|ru)\\//, '').replace(/^(nl|de|fr|es|it|ru)-/, '');
    return postSlug === slug && p.data.lang === lang;
  });
} catch (e) {}

if (!post) {
  return Astro.redirect(lang === 'en' ? '/blog/' : \`/\${lang}/blog/\`);
}

const { Content } = await post.render();
---

<Layout title={post.data.meta?.title || post.data.title} description={post.data.meta?.description || post.data.description}>
  <article style="padding: 60px 0; background: #F5F0EB; min-height: 60vh;">
    <div class="container mx-auto px-4" style="max-width: 800px;">
      <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 16px;">{post.data.title}</h1>
      <p style="color: #666; margin-bottom: 32px;">{post.data.publishDate} · {post.data.author}</p>
      <div class="prose" style="background: white; border-radius: 12px; padding: 32px; border: 1px solid #E0D8D0;">
        <Content />
      </div>
    </div>
  </article>
</Layout>
`;

const blogCategoryContent = `---
import Layout from '../../../../layouts/Layout.astro';
import { getCollection } from 'astro:content';
import { supportedLanguages, type SupportedLanguage } from '../../../../i18n/translations';
import { getMarket } from '../../../../i18n/market';

const { lang: langParam, category } = Astro.params;
const lang = (langParam || 'en') as SupportedLanguage;

if (langParam && !supportedLanguages.includes(lang)) {
  return Astro.redirect('/');
}

const market = getMarket(lang);

let posts: any[] = [];
try {
  const allBlogPosts = await getCollection('blog');
  posts = allBlogPosts
    .filter(p => p.data.lang === lang && p.data.category === category)
    .sort((a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf());
} catch (e) {}

const catTitle = (category || '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
---

<Layout title={\`\${catTitle} Blog | Steroiden \${market.marketName}\`} description={\`\${catTitle} articles and guides.\`}>
  <section style="padding: 60px 0; background: #F5F0EB; min-height: 60vh;">
    <div class="container mx-auto px-4">
      <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 24px;">{catTitle}</h1>
      {posts.length > 0 ? (
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px;">
          {posts.map(post => (
            <article style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #E0D8D0;">
              <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">{post.data.title}</h2>
              <p style="color: #555; font-size: 14px;">{post.data.description}</p>
            </article>
          ))}
        </div>
      ) : (
        <div style="text-align: center; padding: 80px 20px;">
          <p style="color: #666; font-size: 1.1rem;">No articles in this category yet.</p>
        </div>
      )}
    </div>
  </section>
</Layout>
`;

const files = [
  { path: path.join(PAGES_DIR, '[lang]', 'blog', 'index.astro'), content: blogIndexContent },
  { path: path.join(PAGES_DIR, '[lang]', 'blog', '[slug].astro'), content: blogSlugContent },
  { path: path.join(PAGES_DIR, '[lang]', 'blog', 'category', '[category].astro'), content: blogCategoryContent },
];

for (const file of files) {
  fs.mkdirSync(path.dirname(file.path), { recursive: true });
  fs.writeFileSync(file.path, file.content, 'utf-8');
  console.log(`✓ Wrote ${path.relative('.', file.path)}`);
}

console.log('Done! Blog pages updated.');
