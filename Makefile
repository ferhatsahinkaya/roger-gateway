build: build-image
run: run-image

build-image:
	$(call docker_build)

run-image:
	docker run roger/gateway

define docker_build
	docker build --file=dist/docker/Dockerfile \
	--rm \
	-t roger/gateway:latest .

endef