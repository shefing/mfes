import * as React from 'react';
import { PiletApi } from 'my-app';
import Page from './Page';
import { Link } from 'react-router-dom';

export function setup(app: PiletApi) {
  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(() =>
    <a href="https://docs.piral.io" target="_blank">Documentation</a>
  );
  app.registerTile(() => <Link to='/sample'>Welcome to Pilet!!!!! its shani</Link>, {
    initialColumns: 2,
    initialRows: 1,
  });
app.registerPage('/sample',Page)
}
