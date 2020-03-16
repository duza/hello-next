import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = ({ content }) => (
  <div style={layoutStyle}>
    <Header />
    {content}
  </div>
);

export default Layout;
