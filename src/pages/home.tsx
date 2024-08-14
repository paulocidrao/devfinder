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

import { useState, useEffect } from "react";
import { api } from "../lib/axios/api";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

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
  twitter_username: string;
  created_at: string;
}

export const Home = () => {
  const [username, setUserName] = useState<string>("");
  const [responseData, setResponseData] = useState<IGetUserGithub>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value.trim());
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("octocat");
        setResponseData(response.data);
      } catch {
        toast.error("Falha ao pesquisar o usuário, tente novamente!");
      }
    };
    fetchData();
  }, []);

  const getUserGitHub = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.get(username);
      setResponseData(response.data);
      setUserName("");
    } catch {
      toast.error("Falha ao pesquisar o usuário, tente novamente!");
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
        {responseData?.avatar_url && (
          <img src={responseData?.avatar_url} alt="avatar do github" />
        )}
        <div>
          {responseData && (
            <UserHeader>
              {responseData?.name && <p>{responseData?.name}</p>}
              {responseData?.login && <span>@{responseData?.login}</span>}
              <span>
                {formatDistanceToNow(responseData.created_at, {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </span>
              {responseData?.bio ? (
                <>
                  <p>{responseData?.bio}</p>
                </>
              ) : (
                <p>Bio não disponível</p>
              )}
            </UserHeader>
          )}
          <GitInfo>
            <p>Repos</p>
            <span>{responseData?.public_repos}</span>
            <p>Seguidores</p>
            <span>{responseData?.followers}</span>
            <p>Seguindo</p>
            <span>{responseData?.following}</span>
          </GitInfo>
          <SocialLinks>
            <MapPin size={32} />
            {responseData?.location ? (
              <>
                <p>{responseData?.location}</p>
              </>
            ) : (
              <>
                <span>Não disponivel</span>
              </>
            )}

            <Link size={32} />
            {responseData?.blog ? (
              <>
                <a href={responseData?.blog}>{responseData?.blog}</a>
              </>
            ) : (
              <>
                <span>Não disponivel</span>
              </>
            )}

            <XLogo size={32} />
            {responseData?.twitter_username ? (
              <>
                <a href={`https://x.com/${responseData.twitter_username}`}>
                  {responseData.twitter_username}
                </a>
              </>
            ) : (
              <>
                <span>Não disponivel</span>
              </>
            )}
            <BuildingOffice size={32} />

            {responseData?.company ? (
              <>
                <p>{responseData?.company}</p>
              </>
            ) : (
              <>
                <p>Não disponivel</p>
              </>
            )}
          </SocialLinks>
        </div>
      </UserContent>
    </Container>
  );
};
