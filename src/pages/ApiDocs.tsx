import Header from '@/components/layout/Header';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SWAGGER_JSON_URL = 'https://api.example.com/openapi.json';

export default function ApiDocs() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <SwaggerUI url={SWAGGER_JSON_URL} />
    </div>
  );
}
