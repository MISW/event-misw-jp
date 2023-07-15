#!/usr/bin/env sh

corepack enable
corepack prepare pnpm@latest --activate
pnpm i --frozen-lockfile
mv -v src/ dist/
mv -v _headers dist/
mv -v _redirects dist/

exit
