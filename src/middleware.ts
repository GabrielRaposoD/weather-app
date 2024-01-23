import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);

  requestHeaders.set('request-ip', req.ip ?? '');
  requestHeaders.set('request-url', req.url);
  requestHeaders.set('request-geo', JSON.stringify(req.geo));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
