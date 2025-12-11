import { useState } from "react";
import { Mail, MessageCircle, ArrowLeft, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validations";

const WHATSAPP_NUMBER = "5511940291064";
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar um orçamento de produtos.";
const FORMSUBMIT_URL = "https://formsubmit.co/ajax/vendas@malemaparafusos.com.br";

type Step = "choose" | "form" | "success";

interface QuoteRequestDialogProps {
  children?: React.ReactNode;
  buttonText?: string;
  buttonVariant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive";
  buttonSize?: "default" | "sm" | "lg" | "icon";
  buttonClassName?: string;
}

export const QuoteRequestDialog = ({ 
  children, 
  buttonText = "Solicitar Orçamento",
  buttonVariant = "default",
  buttonSize = "default",
  buttonClassName = ""
}: QuoteRequestDialogProps) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("choose");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [formData, setFormData] = useState<QuoteFormData>({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const { toast } = useToast();

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // Reset state when closing
      setTimeout(() => {
        setStep("choose");
        setErrors({});
        setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
      }, 200);
    }
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(whatsappUrl, "_blank");
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof QuoteFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate with Zod
    const result = quoteFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof QuoteFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof QuoteFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nome: result.data.nome,
          email: result.data.email,
          telefone: result.data.telefone,
          mensagem: result.data.mensagem,
          _subject: "Nova Solicitação de Orçamento - Malema Parafusos",
        }),
      });

      if (response.ok) {
        setStep("success");
        toast({
          title: "Solicitação enviada!",
          description: "Entraremos em contato em breve.",
        });
      } else {
        throw new Error("Erro ao enviar");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children || (
          <Button variant={buttonVariant} size={buttonSize} className={buttonClassName}>
            {buttonText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {step === "choose" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Solicitar Orçamento</DialogTitle>
              <p className="text-muted-foreground">
                Como deseja solicitar seu orçamento?
              </p>
            </DialogHeader>

            <div className="grid gap-4 mt-4">
              <button
                onClick={() => setStep("form")}
                className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent hover:border-primary/50 transition-all text-left group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Enviar por E-mail</h3>
                  <p className="text-sm text-muted-foreground">
                    Preencha o formulário e retornaremos em até 24h
                  </p>
                </div>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all text-left group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-colors flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">
                    Atendimento imediato: (11) 94029-1064
                  </p>
                </div>
              </button>
            </div>
          </>
        )}

        {step === "form" && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setStep("choose")}
                  className="h-8 w-8"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <DialogTitle>Solicitar Orçamento</DialogTitle>
              </div>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <Label htmlFor="quote-nome">Nome Completo *</Label>
                <Input
                  id="quote-nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className={errors.nome ? "border-destructive" : ""}
                />
                {errors.nome && (
                  <p className="text-sm text-destructive mt-1">{errors.nome}</p>
                )}
              </div>

              <div>
                <Label htmlFor="quote-email">E-mail *</Label>
                <Input
                  id="quote-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="quote-telefone">Telefone *</Label>
                <Input
                  id="quote-telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                  className={errors.telefone ? "border-destructive" : ""}
                />
                {errors.telefone && (
                  <p className="text-sm text-destructive mt-1">{errors.telefone}</p>
                )}
              </div>

              <div>
                <Label htmlFor="quote-mensagem">Mensagem / Produtos Desejados *</Label>
                <Textarea
                  id="quote-mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Descreva os produtos e quantidades que precisa..."
                  rows={4}
                  className={errors.mensagem ? "border-destructive" : ""}
                />
                {errors.mensagem && (
                  <p className="text-sm text-destructive mt-1">{errors.mensagem}</p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Solicitação"
                )}
              </Button>
            </form>
          </>
        )}

        {step === "success" && (
          <div className="text-center py-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Solicitação Enviada!
            </h3>
            <p className="text-muted-foreground mb-6">
              Recebemos sua solicitação e entraremos em contato em breve.
            </p>
            <Button onClick={() => setOpen(false)}>Fechar</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
