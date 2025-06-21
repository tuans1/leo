import { gql, QueryHookOptions, useQuery } from "@apollo/client";
import { User } from "./user.type";

type GetUserArgs = {
  type: string;
  name: string;
};

type GetListUserBySearchType = {
  inputs: GetUserArgs;
  options?: Omit<QueryHookOptions, "variables">;
};

type GetListUserBySearchResponse = {
  getListUserBySearch: User[];
};

const GET_LIST_USER_BY_SEARCH = gql`
  query GetListUserBySearch($params: GetUserArgs!) {
    getListUserBySearch(params: $params) {
      id
      name
      email
      avatar
      userCreatedDt
    }
  }
`;

export const useGetListUserBySearch = ({
  inputs,
  options,
}: GetListUserBySearchType) => {
  const { data, loading, error, refetch, networkStatus, previousData } =
    useQuery<GetListUserBySearchResponse>(GET_LIST_USER_BY_SEARCH, {
      variables: {
        params: inputs,
      },
      ...options,
    });

  return { data, loading, error, refetch, previousData, networkStatus };
};
