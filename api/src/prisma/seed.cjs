require('dotenv').config();

const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const store = await prisma.store.upsert({
    where: { slug: 'nagpur-1' },
    update: {
      name: 'Tea Pump - Nagpur',
      city: 'Nagpur',
      address: 'Main Road, Nagpur',
      isActive: true,
    },
    create: {
      slug: 'nagpur-1',
      name: 'Tea Pump - Nagpur',
      city: 'Nagpur',
      address: 'Main Road, Nagpur',
      isActive: true,
    },
  });

  await prisma.special.deleteMany({ where: { storeId: store.id } });
  await prisma.menuItem.deleteMany({ where: { storeId: store.id } });

  await prisma.special.create({
    data: {
      storeId: store.id,
      title: "Today's Special",
      itemName: 'Sandwich • Paneer',
      priceInr: 179,
      subtitle: 'Order • Pay • Go',
      tags: ['Fast pickup', 'Spiced', 'Tangy'],
      isActive: true,
    },
  });

  await prisma.menuItem.createMany({
    data: [
      { storeId: store.id, name: 'Masala Chai', description: 'Fast pickup', priceInr: 12, category: 'chai', isActive: true },
      { storeId: store.id, name: 'Adrak Chai', description: 'Ginger • Cozy', priceInr: 12, category: 'chai', isActive: true },
      { storeId: store.id, name: 'Elaichi Chai', description: 'Cardamom • Cozy', priceInr: 12, category: 'chai', isActive: true },
      { storeId: store.id, name: 'Cold Coffee', description: 'Icy • Refreshing', priceInr: 119, category: 'coolers', isActive: true },
      { storeId: store.id, name: 'Lassi', description: 'Icy • Refreshing', priceInr: 50, category: 'coolers', isActive: true },
      { storeId: store.id, name: 'Shegao Kachori', description: 'Crisp • Spiced • Perfect pair', priceInr: 50, category: 'snacks', isActive: true },
      { storeId: store.id, name: 'Tikka Pav', description: 'Spiced • Tangy', priceInr: 50, category: 'snacks', isActive: true },
      { storeId: store.id, name: 'Veg Maggi', description: 'Hot • Veggie • Comfort', priceInr: 50, category: 'snacks', isActive: true },
    ],
  });

  console.log('✅ Seed done for storeSlug=nagpur-1');
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error('❌ Seed failed:', e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });