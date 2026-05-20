# Simple Shop Backend

Backend aplikacji prostego sklepu internetowego.

## SonarCloud


[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=PiotrKlocek_project-backend&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=PiotrKlocek_project-backend)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=PiotrKlocek_project-backend&metric=bugs)](https://sonarcloud.io/summary/new_code?id=PiotrKlocek_project-backend)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=PiotrKlocek_project-backend&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=PiotrKlocek_project-backend)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=PiotrKlocek_project-backend&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=PiotrKlocek_project-backend)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=PiotrKlocek_project-backend&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=PiotrKlocek_project-backend)

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
