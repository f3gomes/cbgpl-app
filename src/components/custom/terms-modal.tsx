import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PrivacyAgreement: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="gap-1 text-center text-sm">
        <span>Ao clicar em Enviar você concorda com as </span>
        <DialogTrigger className="text-orange-500 transition duration-200 hover:underline">
          Políticas de Privacidade
        </DialogTrigger>
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Políticas de Privacidade</DialogTitle>
        </DialogHeader>

        <p className="text-justify text-sm text-gray-500">
          Política de Segurança da Informação O capítulo Ceará do PMI está
          comprometido com a proteção dos seus dados pessoais e a transparência
          no seu tratamento, em conformidade com a Lei Geral de Proteção de
          Dados (LGPD – Lei nº 13.709/2018) e o Código de Ética e Conduta
          Profissional do PMI.
        </p>

        <h1 className="-mb-3 font-bold">Coleta e Uso de Dados</h1>
        <p className="text-justify text-sm text-gray-500">
          Ao se inscrever no evento, você consente com a coleta e uso dos seus
          dados pessoais para fins de comunicação, organização e aprimoramento
          da experiência do congresso. Esses dados serão coletados através de
          formulários e cookies da página web oficial do congresso. Seus dados
          não serão compartilhados com terceiros sem sua autorização expressa,
          exceto quando exigido por lei. Os dados que serão coletas e
          descartados logo após o evento são: nome completo, CPF, etc, etc e
          etc.
        </p>

        <h1 className="-mb-3 font-bold">Segurança e Confidencialidade</h1>
        <p className="text-justify text-sm text-gray-500">
          Adotamos medidas técnicas e organizacionais para garantir a segurança
          das informações, prevenindo acessos não autorizados, vazamentos ou
          usos indevidos.
        </p>

        <h1 className="-mb-3 font-bold">Direitos do Titular</h1>
        <p className="text-justify text-sm text-gray-500">
          Você pode solicitar acesso, correção ou exclusão dos seus dados
          pessoais a qualquer momento, conforme previsto na LGPD. Para isso,
          entre em contato pelo e-mail <strong>[inserir e-mail]</strong> e exerça os seus
          direitos previstos em Lei. Ao continuar navegando no website e ao se
          inscrever no evento, você concorda com esta política de segurança da
          informação.
        </p>

        <h1 className="-mb-3 font-bold">Princípios Éticos do PMI</h1>
        <p className="text-justify text-sm text-gray-500">
          Esta política está consonante com os princípios éticos e valores da
          comunidade global de gerenciamento de projetos, que são:
          responsabilidade, respeito, justiça e honestidade.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyAgreement;
