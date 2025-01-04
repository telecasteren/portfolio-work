import { mainSection } from "/js/data/general/constants.js";

export function contactForm() {
  const contactSection = document.createElement("section");
  contactSection.className = "contact-section";

  const formContainer = document.createElement("div");
  formContainer.className = "form-container";

  const form = document.createElement("form");

  function createInput(
    type,
    id,
    name,
    placeholder,
    required = false,
    autocomplete = ""
  ) {
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.name = name;
    input.placeholder = placeholder;
    if (required) input.required = true;
    if (autocomplete) input.autocomplete = autocomplete;
    return input;
  }

  function createLabel(forAttribute, text) {
    const label = document.createElement("label");
    label.htmlFor = forAttribute;
    label.hidden = true;
    label.textContent = text;
    return label;
  }

  form.appendChild(createLabel("fname", "Your Name"));
  form.appendChild(
    createInput("text", "fname", "fullname", "your name", true, "name")
  );

  form.appendChild(createLabel("cname", "Company Name"));
  form.appendChild(
    createInput("text", "cname", "companyname", "company name (optional)")
  );

  form.appendChild(createLabel("email", "Your Email"));
  form.appendChild(
    createInput("email", "email", "email", "your email address", true, "email")
  );

  const inquiryLabel = createLabel("inquiry", "Subject");
  form.appendChild(inquiryLabel);

  const inquirySelect = document.createElement("select");
  inquirySelect.id = "inquiry";
  inquirySelect.name = "inquiry";
  inquirySelect.required = true;

  const options = [
    { value: "required", text: "Subject" },
    { value: "projects", text: "Talk about projects" },
    { value: "work", text: "Hire me" },
    { value: "other", text: "Other" },
  ];

  options.forEach((opt) => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.text;
    inquirySelect.appendChild(option);
  });
  form.appendChild(inquirySelect);

  form.appendChild(createLabel("message", "Message"));

  const messageTextarea = document.createElement("textarea");
  messageTextarea.id = "message";
  messageTextarea.name = "message";
  messageTextarea.placeholder = "your message here..";
  messageTextarea.style.height = "200px";
  messageTextarea.required = true;
  form.appendChild(messageTextarea);

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Send";
  form.appendChild(submitButton);

  formContainer.appendChild(form);
  contactSection.appendChild(formContainer);
  mainSection.appendChild(contactSection);
}
