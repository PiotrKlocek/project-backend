# Simple Shop Backend

Backend aplikacji prostego sklepu internetowego.

## SonarCloud

Po dodaniu projektu w SonarCloud podmień `TWOJA_ORGANIZACJA` oraz `TWOJ_LOGIN_simple-shop-backend`.

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=TWOJ_LOGIN_simple-shop-backend&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=TWOJ_LOGIN_simple-shop-backend)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=TWOJ_LOGIN_simple-shop-backend&metric=bugs)](https://sonarcloud.io/summary/new_code?id=TWOJ_LOGIN_simple-shop-backend)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=TWOJ_LOGIN_simple-shop-backend&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=TWOJ_LOGIN_simple-shop-backend)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=TWOJ_LOGIN_simple-shop-backend&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=TWOJ_LOGIN_simple-shop-backend)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=TWOJ_LOGIN_simple-shop-backend&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=TWOJ_LOGIN_simple-shop-backend)

## Uruchomienie

```bash
npm install
npm run dev
```

API działa domyślnie na:

```txt
http://localhost:3001
```

## Endpointy

- `GET /api/health`
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/orders`

## Linter i git hook

```bash
npm run lint
```

Hook `pre-commit` uruchamia `lint-staged`.
