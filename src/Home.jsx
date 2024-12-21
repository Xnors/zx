import "./Home.scss";
import { useNavigate } from "@solidjs/router";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div class="sidebar">
        <div className="zx-photo">我周夏哥的帅照</div>
        <div className="self-intro">
          自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍
        </div>
      </div>
      <div class="main-content">
        <h1>我EMO了</h1>
        <div className="emo-text-box" onClick={() => navigate("/blogs/test")}>
          emo短文示例
        </div>
      </div>
    </>
  );
}

export default Home;
