import {AnimationObject} from 'lottie-react-native';
import { car, car1, car2 } from '../../assets/images';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: car,
    text: 'The best car in your hands with Ryde',
    textColor: '#005b4f',
    backgroundColor: '#ffa3ce',
  },
  {
    id: 2,
    animation: car1,
    text: 'The perfect ride is just a tap away!',
    textColor: '#1e2169',
    backgroundColor: '#bae4fd',
  },
  {
    id: 3,
    animation: car2,
    text: `Your ride, your way. Let's get started!`,
    textColor: '#F15937',
    backgroundColor: '#faeb8a',
  },
];

export default data;