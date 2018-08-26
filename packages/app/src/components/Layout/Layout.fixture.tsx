import 'antd/dist/antd.css';
import * as React from 'react';
import Layout from './Layout';

export default [
  {
    component: Layout,
    name: 'defaultView',
    props: {
      children: <div>Content</div>
    }
  },
]