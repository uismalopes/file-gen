# File Gen

File-Gen é uma ferramenta de linha de comando (CLI) que acelera a criação de novos arquivos e scaffolding para projetos. Ela facilita gerar arquivos a partir de templates, substituir tokens e usar configurações para padronizar artefatos em projetos.

**Principais Recursos**
- Geração de arquivos a partir de templates
- Substituição de tokens/variáveis nos templates
- Suporte a arquivos de configuração para fluxos repetíveis
- Modo interativo e opções por linha de comando

**Requisitos**
- Node.js 14+ e npm

**Instalação**
Opções comuns para instalar ou usar a CLI localmente:

Instalação global (quando publicada no npm):

```bash
npm install -g file-gen
```

Usar via npx (quando publicada):

```bash
npx file-gen <comando>
```

Instalação para desenvolvimento local:

```bash
git clone https://github.com/SEU_USUARIO/file-gen.git
cd file-gen
npm install
npm run build # se aplicável
npm link      # para usar o comando `file-gen` localmente
```

**Uso**
Formato geral:

```bash
file-gen <comando> [opções]
```

Exemplo — iniciar criação interativa (exemplo de comando):

```bash
file-gen start
```

Exemplo — criar a partir de um arquivo de configuração:

```bash
file-gen create --config ./file-gen.config.json
```

Observação: os nomes exatos de comandos e opções podem variar conforme a versão; rode `file-gen --help` para listar comandos disponíveis.

**Arquivo de Configuração**
Recomenda-se usar um arquivo de configuração (ex.: `file-gen.config.json`) para definir templates, token maps e regras de geração para projetos repetíveis.

**Contribuição**
- Fork o repositório
- Crie uma branch com sua feature: `git checkout -b feat/minha-feature`
- Instale dependências: `npm install`
- Rode os testes (se houver) e linters
- Abra um Pull Request descrevendo a mudança

Para desenvolvimento local sugerido:

```bash
npm install
npm run dev
```

**Licença**
Este projeto está licenciado sob a licença contida no arquivo `LICENSE` (MIT por padrão).

**Autor**
[Uisma Lopes](https://github.com/uismalopes)

**Suporte**
Abra uma issue no repositório caso encontre bugs ou tenha sugestões de melhoria.