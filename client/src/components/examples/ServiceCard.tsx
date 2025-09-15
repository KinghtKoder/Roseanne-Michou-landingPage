import ServiceCard from '../ServiceCard';
import { Zap } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <ServiceCard 
      icon={Zap}
      title="Emergency Treatment"
      description="24/7 emergency dental care for urgent situations including severe tooth pain, trauma, and dental emergencies."
    />
  );
}