<template>
  <KPage padding>
     <!-- Use default content slot -->
  </KPage>
</template>

<script>
import { mixins } from '@kalisio/kdk/core.client'

export default {
  name: 'home-activity',
  mixins: [mixins.baseActivity()]
}
</script>
