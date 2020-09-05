/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      Name
      Category
      ImageURL
      Address
      Latitude
      Longitude
      Notes
      AKA
      Cap
      CurrOccupancy
      IsOpen
      CheckedInUsers {
        items {
          id
          CheckedInLocationId
          IsAdmin
          Email
          UserName
          PhoneNumber
          UserPoolId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      Name
      Category
      ImageURL
      Address
      Latitude
      Longitude
      Notes
      AKA
      Cap
      CurrOccupancy
      IsOpen
      CheckedInUsers {
        items {
          id
          CheckedInLocationId
          IsAdmin
          Email
          UserName
          PhoneNumber
          UserPoolId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      Name
      Category
      ImageURL
      Address
      Latitude
      Longitude
      Notes
      AKA
      Cap
      CurrOccupancy
      IsOpen
      CheckedInUsers {
        items {
          id
          CheckedInLocationId
          IsAdmin
          Email
          UserName
          PhoneNumber
          UserPoolId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      CheckedInLocationId
      IsAdmin
      Email
      UserName
      PhoneNumber
      UserPoolId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      CheckedInLocationId
      IsAdmin
      Email
      UserName
      PhoneNumber
      UserPoolId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      CheckedInLocationId
      IsAdmin
      Email
      UserName
      PhoneNumber
      UserPoolId
      createdAt
      updatedAt
    }
  }
`;
