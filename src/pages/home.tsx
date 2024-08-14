import {
  BuildingOffice,
  Link,
  MagnifyingGlass,
  MapPin,
  XLogo,
} from "@phosphor-icons/react";
import {
  Container,
  Content,
  GitInfo,
  SearchUser,
  SocialLinks,
  UserContent,
  UserHeader,
} from "./styled";

import React, { useState } from "react";
import { api } from "../lib/axios/api";

interface IGetUserGithub {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  company: string;
}

export const Home = () => {
  const [username, setUserName] = useState<string>("");
  const [responseData, setResponseData] = useState<IGetUserGithub>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value.trim());
  };

  const getUserGitHub = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.get(username);
      setResponseData(response.data);
      console.log(response.data.company);
      setUserName("");
    } catch {
      console.error("Erro ao buscar usuário:", error);
    }
  };

  return (
    <Container>
      <Content>
        <h1>devfinder</h1>
        <SearchUser onSubmit={getUserGitHub}>
          <MagnifyingGlass size={32} />
          <input
            onChange={handleInputChange}
            value={username}
            type="text"
            placeholder="Procure pelo nome do usuário..."
          />
          <button type="submit">Pesquisar</button>
        </SearchUser>
      </Content>
      <UserContent>
        <img src={responseData?.avatar_url} alt="avatar do github" />
        <div>
          <UserHeader>
            <p>{responseData?.name}</p>
            <span>@{responseData?.login}</span>
            <span>Entrou em 2022</span>
            {responseData?.bio ? (
              <>
                <p>{responseData?.bio}</p>
              </>
            ) : (
              <p>Nenhuma bio disponível</p>
            )}
          </UserHeader>
          <GitInfo>
            <p>Repos</p>
            <span>{responseData?.public_repos}</span>
            <p>Seguidores</p>
            <span>{responseData?.followers}</span>
            <p>seguindo</p>
            <span>{responseData?.following}</span>
          </GitInfo>
          <SocialLinks>
            <MapPin size={32} />
            <p>{responseData?.location}</p>
            <Link size={32} />
            <a href={responseData?.blog}>blog</a>
            <XLogo size={32} />
            <a href="">Not avialable</a>
            <BuildingOffice size={32} />
            <p>{responseData?.company}</p>
          </SocialLinks>
        </div>
      </UserContent>
    </Container>
  );
};
