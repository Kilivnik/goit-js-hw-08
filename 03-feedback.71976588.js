var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var o=a("kEUo3");const n={form:document.querySelector(".feedback-form"),input:document.querySelector('input[type="email"]'),textarea:document.querySelector('textarea[name="message"]')};n.form.addEventListener("submit",(function(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state")),r=e.currentTarget.email.value,a=e.currentTarget.message.value;if(""===r||""===a)return alert("Будь-ласка заповніть всі поля форми!");t&&console.log(t);e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),n.form.addEventListener("input",(0,o.throttle)((function(e){const t={email:n.input.value,message:n.textarea.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(n.input.value=t.email,n.textarea.value=t.message)}();
//# sourceMappingURL=03-feedback.71976588.js.map
