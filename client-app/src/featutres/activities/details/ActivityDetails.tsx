import {
  Card,
  Image,
  CardContent,
  CardHeader,
  CardMeta,
  CardDescription,
  Button,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity | undefined;
  cancelSelectActivity: () => void;
  openForm: (id: string | undefined) => void;
}

export default function ActivityDetails({
  activity,
  cancelSelectActivity,
  openForm,
}: Props) {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity?.category}.jpg`} />
      <CardContent>
        <CardHeader>{activity?.title}</CardHeader>
        <CardMeta>{activity?.date}</CardMeta>
        <CardDescription>{activity?.description}</CardDescription>
      </CardContent>
      <CardContent extra>
        <Button.Group widths="2">
          <Button onClick={() => openForm(activity?.id)} basic color="blue" content="Edit" />
          <Button
            onClick={cancelSelectActivity}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </CardContent>
    </Card>
  );
}
