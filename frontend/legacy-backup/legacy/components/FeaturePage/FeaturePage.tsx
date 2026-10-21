import type { ComponentChildren } from "preact";
import { AppLayout } from "../layout/AppLayout";

type Props = {
  title: string;
  subtitle: string;
  children: ComponentChildren;
};

export function FeaturePage({ title, subtitle, children }: Props) {
  return (
    <AppLayout title={title} subtitle={subtitle}>
      {children}
    </AppLayout>
  );
}
