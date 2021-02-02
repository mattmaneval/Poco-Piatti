import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const LogoLink = () => {
  return (
    <Link href="/" passHref>
      <a>
        <Image
          src="/assets/images/logo.jpg"
          alt=""
          height={77}
          width={142}
          layout="intrinsic"
        />
      </a>
    </Link>
  );
}

export default LogoLink;
