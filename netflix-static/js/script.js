const faqShort = document.querySelectorAll('.faq-short')

faqShort.forEach((el) => {
  el.addEventListener('click', (e) => {
    document.querySelectorAll('.faq-open').forEach((el) => {
      el.classList.remove('faq-open')
    })
    const faqDesc = el.closest('.faq-item').children[1]
    if (faqDesc.classList.contains('faq-open')) {
      faqDesc.classList.remove('faq-open')
    }
    else {
      faqDesc.classList.add('faq-open')
    }
  })
})
