import Head from "next/head";
import { HomeContainer } from "../styles/pages/home";

import { ButtonCTA } from "../styles/buttons";
import { TypographyH1, TypographyP1 } from "../styles/typography";
import { GlassMorphism, GlassNotification } from "../styles/pages/cta";
import Image from "next/image";
import logoNota from "../assets/logo.svg";

export default function Cta() {
  return (
    <>
      <Head>
        <title>Nota Mais</title>
        <meta name="description" content="Desccubra sua nota no enem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer>
        <GlassMorphism>
          <TypographyH1>Parabéns!</TypographyH1>
        </GlassMorphism>
        <Image src={logoNota} alt="" height={200} width={200} />
        <GlassNotification>
          <TypographyP1>NOTA+</TypographyP1>
          <TypographyP1>
            Você acabou de ser aprovado em 30 universidades
          </TypographyP1>
        </GlassNotification>
        <ButtonCTA
          css={{
            background:
              "linear-gradient(90deg, #4FE35E 2.32%, #30E74D 107.7%);",
          }}>
          Ver todas universidades
        </ButtonCTA>
      </HomeContainer>
    </>
  );
}
