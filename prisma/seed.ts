import { PrismaClient } from '@prisma/client';
import { villas } from './data/villas';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');
  console.log(`📊 Found ${villas.length} villas to seed`);

  // Clear existing data (optional)
  console.log('🧹 Clearing existing villas...');
  await prisma.villa.deleteMany();

  for (const villa of villas) {
    console.log(`🏠 Creating villa: ${villa.name}`);
    
    const createdVilla = await prisma.villa.create({
      data: {
        id: villa.id,
        name: villa.name,
        description: villa.description,
        image: villa.image,
        bedrooms: villa.bedrooms,
        bathrooms: villa.bathrooms,
        guests: villa.guests,
        amenities: JSON.stringify(villa.amenities),
      },
    });
    
    console.log(`✅ Created villa with ID: ${createdVilla.id}`);
  }

  // Verify the data was inserted
  const count = await prisma.villa.count();
  console.log(`📈 Total villas in database: ${count}`);
  
  console.log('🎉 Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('🔌 Disconnecting from database...');
    await prisma.$disconnect();
  });