export interface ProjectPlot {
  id: number;
  number: string;
  size: string; // e.g., '250 Sq.Yds'
  dimensions: string; // '30 x 75 ft'
  areaSqFt: number; // 2250
  facing: 'East' | 'West' | 'North' | 'South';
  portion: 'Upper (6.25 Acres)' | 'Lower (2.00 Acres)';
  status: 'available' | 'reserved' | 'sold';
  category: 'Standard' | 'Corner' | 'Park Facing' | 'Road Junction';
  priceEstimate?: string;
  notes?: string;
}

export interface ConstructionPackage {
  id: string;
  name: string;
  tagline: string;
  minRate: number;
  maxRate: number;
  badge?: string;
  popular?: boolean;
  features: string[];
  materialsIncluded: string[];
  suitableFor: string;
}

export interface ConstructionStage {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  timeline: string;
  keyMaterials: string[];
  inspectionMilestones: string[];
  visualLevel: number; // 1 to 9
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'exterior' | 'living' | 'kitchen' | 'bedroom' | 'porch' | 'staircase';
  categoryLabel: string;
  src: string;
  description: string;
  specs: string[];
  aspectRatio?: 'square' | 'wide' | 'tall';
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  scope: string[];
  icon: string;
}

export interface ClientEnquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  builtUpArea?: number;
  budget?: string;
  details: string;
  timestamp: string;
  status: 'New' | 'Contacted' | 'Meeting Scheduled' | 'Converted' | 'Closed';
}
