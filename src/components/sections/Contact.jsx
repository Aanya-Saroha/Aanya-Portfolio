const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_qcctzdi",
        "template_xi6rm97",
        formRef.current,
        "ExYTiNwWx3Crv_W9p"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "Your Name",
            email: "Your email",
            message: " ",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <Container id="Education">
      <Wrapper>
        <Title>Contact</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <ContactInput
            placeholder="Your Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            value={form.message}
            rows={4}
            onChange={handleChange}
          />
          <ContactButton type="submit" value={loading ? "Sending..." : "Send"} disabled={loading} />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
