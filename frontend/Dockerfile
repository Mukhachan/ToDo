FROM jarredsumner/bun:edge

WORKDIR /app
COPY package.json bun.lock ./

RUN bun install

COPY . .

CMD ["bun", "dev"]
