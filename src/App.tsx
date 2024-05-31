import Routes from "./routes";
import { ConfigProvider, theme as antdTheme } from 'antd';
function App() {
  const newTheme = {
    algorithm: antdTheme.darkAlgorithm,
    token: {
      colorPrimary: "#5E5E5E",
      colorLink: "#00AA67",
    },
    components: {
      Input: {
        controlHeight: 48,
        borderRadius: 4,
        colorTextPlaceholder: "#5E5E5E"
      }
    }
  };

  return (
    <ConfigProvider theme={newTheme}>
      <div className="relative w-[372px] h-[993px] m-auto overflow-hidden">
        <Routes />
      </div>
    </ConfigProvider>
  );
}

export default App;
