/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Get, Query } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('public')
export class PublicController {
  constructor(private prisma: PrismaService) {}

  @Get('stores')
  stores() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return this.prisma.store.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  @Get('menu')
  async menu(@Query('storeSlug') storeSlug: string) {
    const store = await this.prisma.store.findUnique({
      where: { slug: storeSlug },
    });
    if (!store) return [];

    return this.prisma.menuItem.findMany({
      where: { storeId: store.id, isActive: true },
      orderBy: [{ category: 'asc' }, { name: 'asc' }],
    });
  }

  @Get('special')
  async special(@Query('storeSlug') storeSlug: string) {
    const store = await this.prisma.store.findUnique({
      where: { slug: storeSlug },
    });
    if (!store) return null;

    return this.prisma.special.findFirst({
      where: { storeId: store.id, isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}
