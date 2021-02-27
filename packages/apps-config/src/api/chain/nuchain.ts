

export default {
  Address: "MultiAddress",
  LookupSource: "MultiAddress",
  OrgId: "u32",
  CertId: "u64",
  Organization: {
    name: "Vec<u8>",
    admin: "AccountId",
    website: "Vec<u8>",
    email: "Vec<u8>",
    suspended: "bool"
  },
  CertDetail: {
    name: "Vec<u8>",
    org_id: "OrgId"
  }
};
