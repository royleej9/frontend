import { useNavigate } from 'react-router';

export function LoginPage() {
  const navigate = useNavigate(); // useNavigate 훅 호출
  const handleClick = () => {
    navigate('/dashboard');
  };
  return (
    <div>
      로그인 페이지 입니다.
      <button onClick={handleClick}>대시보드 화면 이동</button>
    </div>
  );
}
