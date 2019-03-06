const patterns = {
  name: /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,}){6,}$/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  address: /^.{6,}/,
  phoneNumber: /\+\(380\){1}[0-9]{9}$/
};

function validateForm() {
  const inputNodes = [...document.querySelectorAll('input')];

  inputNodes.forEach(el => {
    if (!this.validateField(el, el.id)) {
      el.classList.add('error');
    }
  });
  return !inputNodes.some(el => el.classList.contains('error'));
}

function validateField(node, field) {
  return patterns[field].test(node.value);
}

export { validateForm, validateField };
