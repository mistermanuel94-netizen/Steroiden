import translate from 'google-translate-api-x';

try {
  const result = await translate('Testosterone Enanthate is the gold standard in pharmaceutical-grade testosterone — trusted by clinicians across Europe.', {from: 'en', to: 'nl'});
  console.log('SUCCESS');
  console.log('Translated:', result.text);
} catch (err) {
  console.log('ERROR:', err.message);
  console.log(err.stack);
}
