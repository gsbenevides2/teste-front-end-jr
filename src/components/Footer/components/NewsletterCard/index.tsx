import Input from "@/components/Input/input";

export default function NewsletterCard() {
  return (
    <div className="newsletter-card">
      <h5>Cadastre-se e Receba nossas novidades e promoções</h5>
      <span>
        Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem
        ipsum
      </span>
      <Input placeholder="Seu e-mail" />
    </div>
  );
}
