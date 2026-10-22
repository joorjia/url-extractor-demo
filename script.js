function extractUrls(text) {
  const regex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
  const matches = text.match(regex) || [];
  return [...new Set(matches)];
}

const input = document.getElementById('inputText');
const result = document.getElementById('result');

const extractBtn = document.getElementById('extractBtn');
const copyBtn = document.getElementById('copyBtn');

extractBtn.addEventListener('click', () => {
  const text = input.value;
  const urls = extractUrls(text);

  if (urls.length === 0) {
    result.textContent = 'هیچ URL پیدا نشد.';
    result.classList.add('empty');
    return;
  }

  result.classList.remove('empty');
  result.textContent = urls.join('\n');
});

copyBtn.addEventListener('click', async () => {
  const content = result.textContent.trim();

  if (!content || result.classList.contains('empty')) {
    alert('هیچ نتیجه‌ای برای کپی وجود ندارد.');
    return;
  }

  try {
    await navigator.clipboard.writeText(content);
    alert('نتیجه با موفقیت کپی شد.');
  } catch (error) {
    alert('کپی انجام نشد.');
  }
});
