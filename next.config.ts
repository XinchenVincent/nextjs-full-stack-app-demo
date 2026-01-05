/*
 * @Author: vincent shixinchenhg@icloud.com
 * @Date: 2026-01-02 19:25:03
 * @LastEditors: vincent shixinchenhg@icloud.com
 * @LastEditTime: 2026-01-05 16:32:29
 * @FilePath: /nextjs-project/full-stack-app-demo/next.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
		],
	},
};

export default nextConfig;
