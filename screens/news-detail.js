import { Heading, Center, Text, Image} from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
  // Get the params
  const params = route.params.item;
  return (
    <>
      <Header title={"News"} withBack="true" />
      <Center flex={1} p={"4"}>
        <Heading>News Detail</Heading>
        <Image source={{ uri: params.image }}
                    w="full"
                    h="170"
                    alt="Image Data"
                    mb={"2"}
                  />
        <Text textAlign={"center"}>{params.date}</Text>
        <Text textAlign={"left"} text>{params.title}</Text>
        
        <Text textAlign={"center"}>{params.content}</Text>
      </Center>
    </>
  );
};

export default NewsDetail;

