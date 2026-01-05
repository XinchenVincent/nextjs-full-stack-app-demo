/*
 * @Author: vincent shixinchenhg@icloud.com
 * @Date: 2026-01-05 19:09:41
 * @LastEditors: vincent shixinchenhg@icloud.com
 * @LastEditTime: 2026-01-05 19:29:32
 * @FilePath: /nextjs-project/full-stack-app-demo/app/event/[slug]/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Suspense } from "react";
import EventDetails from "@/components/EventDetails";

const EventDetailsPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const slug = params.then((p) => p.slug);

	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				<EventDetails params={slug} />
			</Suspense>
		</main>
	);
};
export default EventDetailsPage;
