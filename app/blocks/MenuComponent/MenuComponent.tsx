import React from "react";
import { Button, Group, Text, Image, Menu, Flex } from "@mantine/core";
import {
  IconLogin,
  IconSettings,
  IconUser,
  IconDashboard,
  IconLogout,
  IconCalendar,
  IconDental,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useAuth } from "../../contexts/AuthContext";

const MenuComponent = () => {
  const isMobileOrTablet = useMediaQuery("(max-width: 1200px)");
  const { t, i18n } = useTranslation("menuComponent");
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";

  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuth();

  const renderAuthMenu = () => (
    <Menu>
      <Menu.Target>
        <Button variant="subtle" ff="Oswald, sans-serif">
          <Group
            gap={2}
            wrap="nowrap"
            style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
          >
            <IconUser size={12} />
            <Text size="sm">{`${user?.firstName} ${" "} ${
              user?.lastName
            }`}</Text>
          </Group>
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          onClick={() => router.push(`/${currentLang}/dashboard`)}
          style={{ direction: isRTL ? "rtl" : "ltr" }}
          ff="Oswald, sans-serif"
        >
          <Group gap={2}>
            <IconDashboard size={14} />
            <Text size="sm">{t("doctor_dashboard")}</Text>
          </Group>
        </Menu.Item>
        <Menu.Item
          onClick={() => router.push(`/${currentLang}/profile`)}
          style={{ direction: isRTL ? "rtl" : "ltr" }}
          ff="Oswald, sans-serif"
        >
          <Group gap={2} wrap="nowrap">
            <IconUser size={14} />
            <Text size="sm">{t("profile")}</Text>
          </Group>
        </Menu.Item>
        <Menu.Item
          onClick={logout}
          style={{ direction: isRTL ? "rtl" : "ltr" }}
          ff="Oswald, sans-serif"
        >
          <Group gap={2}>
            <IconLogout size={14} />
            <Text size="sm">{t("logout")}</Text>
          </Group>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );

  const renderMainMenu = () =>
    isMobileOrTablet ? (
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button
            size="12"
            variant="subtle"
            style={{ direction: isRTL ? "rtl" : "ltr" }}
            ff="Oswald, sans-serif"
          >
            {t("menu")}
          </Button>
        </Menu.Target>
        <Menu.Dropdown ff="Oswald, sans-serif">
          {[
            { path: "/services", icon: IconDental, text: t("dental_services") },
            {
              path: "/appointments",
              icon: IconCalendar,
              text: t("appointments"),
            },
            { path: "/about", icon: IconSettings, text: t("about_doctor") },
          ].map((item) => (
            <Menu.Item
              key={item.path}
              onClick={() => router.push(`/${currentLang}${item.path}`)}
              style={{ direction: isRTL ? "rtl" : "ltr" }}
            >
              <Group align="center">
                <item.icon size={12} />
                <Text size="sm">{item.text}</Text>
              </Group>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    ) : (
      <Group
        wrap="nowrap"
        gap={5}
        style={{
          fontFamily: "Oswald, sans-serif",
          flexDirection: isRTL ? "row-reverse" : "row",
        }}
        align="center"
      >
        {[
          { path: "/services", icon: IconDental, text: t("dental_services") },
          {
            path: "/appointments",
            icon: IconCalendar,
            text: t("appointments"),
          },
          { path: "/about", icon: IconSettings, text: t("about_doctor") },
        ].map((item) => (
          <Button
            key={item.path}
            variant="subtle"
            onClick={() => router.push(`/${currentLang}${item.path}`)}
            style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
          >
            <Group
              gap={2}
              wrap="nowrap"
              style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
              align="center"
              justify="center"
            >
              <item.icon size={12} />
              <Text size="sm">{item.text}</Text>
            </Group>
          </Button>
        ))}
      </Group>
    );

  const renderAccountMenu = () =>
    isMobileOrTablet ? (
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button
            size="12"
            variant="subtle"
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            {t("account")}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={() => router.push(`/${currentLang}/signUp`)}>
            <Group
              gap={2}
              style={{
                fontFamily: "Oswald, sans-serif",
                flexDirection: isRTL ? "row-reverse" : "row",
              }}
            >
              <IconUser size={12} />
              <Text size="sm">{t("sign_up")}</Text>
            </Group>
          </Menu.Item>
          <Menu.Item onClick={() => router.push(`/${currentLang}/login`)}>
            <Group
              gap={2}
              style={{
                fontFamily: "Oswald, sans-serif",
                flexDirection: isRTL ? "row-reverse" : "row",
              }}
            >
              <IconLogin size={12} />
              <Text size="sm">{t("login")}</Text>
            </Group>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    ) : (
      <Group
        wrap="nowrap"
        gap={5}
        style={{
          fontFamily: "Oswald, sans-serif",
          flexDirection: isRTL ? "row-reverse" : "row",
        }}
      >
        <Button
          variant="subtle"
          onClick={() => router.push(`/${currentLang}/signUp`)}
          style={{
            fontFamily: "Oswald, sans-serif",
            flexDirection: isRTL ? "row-reverse" : "row",
          }}
        >
          <Group
            gap={2}
            style={{
              fontFamily: "Oswald, sans-serif",
              flexDirection: isRTL ? "row-reverse" : "row",
            }}
            align="center"
          >
            <IconUser size={12} />
            <Text size="sm">{t("sign_up")}</Text>
          </Group>
        </Button>
        <Button
          variant="subtle"
          onClick={() => router.push(`/${currentLang}/login`)}
          style={{
            fontFamily: "Oswald, sans-serif",
            flexDirection: isRTL ? "row-reverse" : "row",
          }}
        >
          <Group
            gap={2}
            wrap="nowrap"
            style={{
              fontFamily: "Oswald, sans-serif",
              flexDirection: isRTL ? "row-reverse" : "row",
            }}
            align="center"
          >
            <IconLogin size={12} />
            <Text size="sm">{t("login")}</Text>
          </Group>
        </Button>
      </Group>
    );

  return (
    <Flex
      align="center"
      justify="space-between"
      mt="xs"
      direction={isRTL ? "row-reverse" : "row"}
    >
      {/* Logo */}
      <Flex
        align="center"
        gap="md"
        flex={1}
        justify={isRTL ? "flex-end" : "flex-start"}
      >
        <Image
          src="/images/transperent-logo.png"
          alt="Logo"
          w={50}
          h={50}
          style={{ cursor: "pointer" }}
          onClick={() => router.push(`/${currentLang}/`)}
        />
      </Flex>

      {/* Main Navigation */}
      <Flex align="center" gap="md" flex={1} justify="center">
        {renderMainMenu()}
      </Flex>

      {/* Right Side Actions */}
      <Flex
        flex={1}
        align="center"
        gap="sm"
        direction={isRTL ? "row-reverse" : "row"}
        justify="flex-end"
      >
        {isAuthenticated ? renderAuthMenu() : renderAccountMenu()}
        <LanguageSwitcher />
      </Flex>
    </Flex>
  );
};

export default MenuComponent;
