import { Helmet } from "react-helmet";

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You - Regardss Email Assistant</title>
        <meta name="description" content="Thank you for joining the Regardss waitlist. We'll notify you when your account is ready." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <main className="container py-8">
        <h1 className="text-4xl font-bold">Thank You!</h1>
        <p className="mt-4">We appreciate your interest in Regardss. You will be notified when your account is ready.</p>
      </main>
    </>
  );
}
