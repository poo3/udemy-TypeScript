interface Enginner {
  name: string;
  role: string;
}

interface Blogger {
  name: string;
  follower: number;
}

type EnginnerBlogger = Enginner & Blogger;

const Jorge: EnginnerBlogger = {
  name: "mac",
  role: "EnginnerBlogger",
  follower: 8080,
};

type StringNumber = string | number;
type BooleanNumber = boolean | number;

type MixType = StringNumber & BooleanNumber;

const MixType = 8080;

console.log(MixType);
console.log(Jorge.name);
