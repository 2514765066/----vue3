import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

export default $this => {
	const route = useRoute();
	const el = ref();

	watch(el, (value, old) => {
		try {
			value.classList.add("select");
			if (old) {
				old.classList.remove("select");
			}
		} catch {}
	});

	watch(
		() => route.path,
		value => {
			el.value = $this.refs[value.replace(/\//g, "")];
		}
	);

	onMounted(() => {
		el.value = $this.refs[route.path.replace(/\//g, "")];
	});
};
