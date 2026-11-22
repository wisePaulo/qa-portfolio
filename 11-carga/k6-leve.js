// Carga LEVE no site de treino: no máximo 5 usuários virtuais por 1 minuto.
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [{ duration: '20s', target: 5 }, { duration: '30s', target: 5 }, { duration: '10s', target: 0 }],
  thresholds: { http_req_duration: ['max<2000'], http_req_failed: ['rate<0.01'] },
};

export default function () {
  const r = http.get('https://restful-booker.herokuapp.com/booking/1', { headers: { Accept: 'application/json' } });
  check(r, { 'status 200': (x) => x.status === 200 });
  sleep(1);
}
