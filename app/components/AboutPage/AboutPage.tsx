import React from "react";
import {
  Container,
  Title,
  Text,
  Stack,
  Group,
  Badge,
  Card,
  Image,
  List,
  Timeline,
  Grid,
  Box,
  Divider,
  Avatar,
  Paper,
} from "@mantine/core";
import {
  IconDental,
  IconFaceId,
  IconAward,
  IconSchool,
  IconCalendar,
  IconMapPin,
  IconHeart,
  IconShield,
  IconLinkPlus,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";

const AboutPage = () => {
  const { t, i18n } = useTranslation("about");
  const isRTL = i18n.language === "ar";

  return (
    <Container size="lg" py="xl" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <Paper p="xl" mb="xl" withBorder>
        <Grid>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Stack gap="md">
              <Group gap="sm">
                <Avatar size="xl">
                  <IconDental size={40} />
                </Avatar>
                <Box>
                  <Title order={1}>{t("hero.name")}</Title>
                  <Text size="lg" fw={500}>
                    {t("hero.title")}
                  </Text>
                </Box>
              </Group>

              <Text size="md" c="dimmed">
                {t("hero.description")}
              </Text>

              <Group gap="xs">
                <Badge variant="light" leftSection={<IconDental size={12} />}>
                  {t("hero.badges.cosmetic")}
                </Badge>
                <Badge variant="light" leftSection={<IconFaceId size={12} />}>
                  {t("hero.badges.aesthetic")}
                </Badge>
                <Badge variant="light" leftSection={<IconLinkPlus size={12} />}>
                  {t("hero.badges.restorative")}
                </Badge>
                <Badge variant="light" leftSection={<IconShield size={12} />}>
                  {t("hero.badges.pediatric")}
                </Badge>
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Image
              src="/images/dr-majdoline.jpg"
              alt={t("hero.imageAlt")}
              radius="md"
              h={300}
              fallbackSrc="https://via.placeholder.com/300x300?text=Dr.+Majdoline"
            />
          </Grid.Col>
        </Grid>
      </Paper>

      {/* Education & Qualifications */}
      <Card mb="xl" p="xl" withBorder>
        <Group gap="sm" mb="lg">
          <IconSchool size={24} />
          <Title order={2}>{t("education.title")}</Title>
        </Group>

        <Timeline active={4} bulletSize={24} lineWidth={2}>
          <Timeline.Item
            bullet={<IconAward size={16} />}
            title={t("education.degrees.dds.title")}
          >
            <Text c="dimmed" size="sm">
              {t("education.degrees.dds.institution")}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconAward size={16} />}
            title={t("education.degrees.cosmetic.title")}
          >
            <Text c="dimmed" size="sm">
              {t("education.degrees.cosmetic.institution")}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconAward size={16} />}
            title={t("education.degrees.orthodontics.title")}
          >
            <Text c="dimmed" size="sm">
              {t("education.degrees.orthodontics.institution")}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconAward size={16} />}
            title={t("education.degrees.aesthetics.title")}
          >
            <Text c="dimmed" size="sm">
              {t("education.degrees.aesthetics.institution")}
            </Text>
          </Timeline.Item>
        </Timeline>
      </Card>

      {/* Professional Experience */}
      <Card mb="xl" p="xl" withBorder>
        <Group gap="sm" mb="lg">
          <IconCalendar size={24} />
          <Title order={2}>{t("experience.title")}</Title>
        </Group>

        <Stack gap="md">
          <Box>
            <Text fw={600} size="lg">
              {t("experience.positions.owner.title")}
            </Text>
            <Group gap="xs" mb="xs">
              <IconMapPin size={16} />
              <Text c="dimmed">
                {t("experience.positions.owner.institution")}
              </Text>
              <Text c="dimmed">{t("experience.positions.owner.duration")}</Text>
            </Group>
            <Text size="sm" c="dimmed">
              {t("experience.positions.owner.description")}
            </Text>
          </Box>

          <Divider />

          <Box>
            <Text fw={600} size="lg">
              {t("experience.positions.specialist.title")}
            </Text>
            <Group gap="xs" mb="xs">
              <IconMapPin size={16} />
              <Text c="dimmed">
                {t("experience.positions.specialist.institution")}
              </Text>
              <Text c="dimmed">
                {t("experience.positions.specialist.duration")}
              </Text>
            </Group>
            <Text size="sm" c="dimmed">
              {t("experience.positions.specialist.description")}
            </Text>
          </Box>

          <Divider />

          <Box>
            <Text fw={600} size="lg">
              {t("experience.positions.resident.title")}
            </Text>
            <Group gap="xs" mb="xs">
              <IconMapPin size={16} />
              <Text c="dimmed">
                {t("experience.positions.resident.institution")}
              </Text>
              <Text c="dimmed">
                {t("experience.positions.resident.duration")}
              </Text>
            </Group>
            <Text size="sm" c="dimmed">
              {t("experience.positions.resident.description")}
            </Text>
          </Box>
        </Stack>
      </Card>

      {/* Specializations */}
      <Card mb="xl" p="xl" withBorder>
        <Group gap="sm" mb="lg">
          <IconDental size={24} />
          <Title order={2}>{t("specializations.title")}</Title>
        </Group>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <List spacing="sm" size="sm" icon={<IconDental size={16} />}>
              <List.Item>
                <Text fw={500}>
                  {t("specializations.items.cosmeticDentistry.title")}
                </Text>
                <Text size="xs" c="dimmed">
                  {t("specializations.items.cosmeticDentistry.description")}
                </Text>
              </List.Item>
              <List.Item>
                <Text fw={500}>
                  {t("specializations.items.dentalBotox.title")}
                </Text>
                <Text size="xs" c="dimmed">
                  {t("specializations.items.dentalBotox.description")}
                </Text>
              </List.Item>
              <List.Item>
                <Text fw={500}>{t("specializations.items.veneers.title")}</Text>
                <Text size="xs" c="dimmed">
                  {t("specializations.items.veneers.description")}
                </Text>
              </List.Item>
            </List>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <List spacing="sm" size="sm" icon={<IconFaceId size={16} />}>
              <List.Item>
                <Text fw={500}>
                  {t("specializations.items.facialAesthetics.title")}
                </Text>
                <Text size="xs" c="dimmed">
                  {t("specializations.items.facialAesthetics.description")}
                </Text>
              </List.Item>
              <List.Item>
                <Text fw={500}>
                  {t("specializations.items.pediatricDentistry.title")}
                </Text>
                <Text size="xs" c="dimmed">
                  {t("specializations.items.pediatricDentistry.description")}
                </Text>
              </List.Item>
              <List.Item>
                <Text fw={500}>
                  {t("specializations.items.orthodontics.title")}
                </Text>
                <Text size="xs" c="dimmed">
                  {t("specializations.items.orthodontics.description")}
                </Text>
              </List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Card>

      {/* Philosophy & Approach */}
      <Card p="xl" withBorder>
        <Group gap="sm" mb="lg">
          <IconHeart size={24} />
          <Title order={2}>{t("philosophy.title")}</Title>
        </Group>

        <Text size="md" mb="md">
          {t("philosophy.paragraph1")}
        </Text>

        <Text size="md">{t("philosophy.paragraph2")}</Text>
      </Card>
    </Container>
  );
};

export default AboutPage;
