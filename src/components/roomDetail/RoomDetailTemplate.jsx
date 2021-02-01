import React from 'react';
import '../../assets/output.css';
import Button from './components/Button';
import {
  HiChevronRight,
  HiOutlineHeart,
  HiChevronLeft,
  HiHeart,
  HiOutlineX
} from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';

const RoomDetail = () => {
  return (
    <>
      <div>
        <h1>메인 / 팝업창 / 필터 / 달력 </h1>
        <Button size="sm" color="pink">
          확인
        </Button>
        <Button size="sm" color="gray">
          취소
        </Button>
        <Button size="sm" color="white">
          더보기
        </Button>
        <Button size="sm" color="black">
          확인
        </Button>
        <Button size="sm" color="black">
          닫기
        </Button>
      </div>
      <div className="mt-8">
        <h1>Fullsize Button</h1>
        <Button size="lg" color="pink">
          로그인
        </Button>
        <Button size="lg" color="white">
          <FcGoogle className="inline-flex items-center justify-center mx-2" />
          구글 계정으로 로그인
        </Button>
        <Button size="lg" color="pink">
          회원가입
        </Button>
        <Button size="lg" color="pink">
          예약하기
        </Button>
      </div>
    </>
  );
};

export default RoomDetail;
