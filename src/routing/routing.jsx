import React from 'react';
// import IndexPage from '../component/IndexPage';
import EmailCheckPage from '../component/EmailCheckPage';
import BasicTable from '../component/Table';
import Admin from '../component/admin';
import { BrowserRouter as Router, Route, Switch ,Routes} from 'react-router-dom';
import Layout from '../component/Layout'



export const Routing = () => {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<EmailCheckPage />} />
      {/* <Route path="/addRequest" element={<IndexPage />} /> */}
      <Route path="/check-email" element={<EmailCheckPage />} />
      <Route path="/table" element={<BasicTable />} />
      <Route path="/admin" element={<Admin />} />
      </Routes>
      </Layout>
  );
};

export default Routing;