<script lang="ts">
import { defineComponent } from 'vue';
import faces2 from '@/assets/images/faces/2.jpg';
import faces8 from '@/assets/images/faces/8.jpg';
import faces12 from '@/assets/images/faces/12.jpg';
import faces11 from '@/assets/images/faces/11.jpg';
import faces5 from '@/assets/images/faces/5.jpg';
import faces9 from '@/assets/images/faces/9.jpg';
import faces13 from '@/assets/images/faces/13.jpg';
import faces10 from '@/assets/images/faces/10.jpg';
import faces15 from '@/assets/images/faces/15.jpg';
import faces1 from '@/assets/images/faces/1.jpg';
import faces14 from '@/assets/images/faces/14.jpg';
import faces3 from '@/assets/images/faces/3.jpg';
import faces6 from '@/assets/images/faces/6.jpg';

export default defineComponent({
  data() {
    return {
      tasks: [
        {
          title: 'Design New Landing Page',
          spk: 'SPK - 01',
          startDate: '02-06-2023',
          status: 'New',
          statusClass: 'fw-semibold text-primary',
          dueDate: '10-06-2023',
          priority: 'Medium',
          priorityClass: 'badge bg-secondary-transparent',
          assignees: [
            { img: faces2 },
            { img: faces8 },
            { img: faces2 },
          ],
          checked: false,
        },
        {
          title: 'New Project Blueprint',
          spk: 'SPK - 04',
          startDate: '05-06-2023',
          status: 'Inprogress',
          statusClass: 'fw-semibold text-secondary',
          dueDate: '15-06-2023',
          priority: 'High',
          priorityClass: 'badge bg-danger-transparent',
          assignees: [
            { img: faces12 },
            { img: faces11 },
          ],
          checked: true,
        },
        {
          title: 'Server Side Validation',
          spk: 'SPK - 11',
          startDate: '12-06-2023',
          status: 'Pending',
          statusClass: 'fw-semibold text-warning',
          dueDate: '16-06-2023',
          priority: 'Low',
          priorityClass: 'badge bg-success-transparent',
          assignees: [
            { img: faces5 },
            { img: faces9 },
            { img: faces13 },
          ],
          checked: false,
        },
        {
          title: 'New Plugin Development',
          spk: 'SPK - 24',
          startDate: '08-06-2023',
          status: 'Completed',
          statusClass: 'fw-semibold text-success',
          dueDate: '17-06-2023',
          priority: 'Low',
          priorityClass: 'badge bg-success-transparent',
          assignees: [
            { img: faces2 },
            { img: faces8 },
            { img: faces2 },
          ],
          checked: false,
        },
        {
          title: 'Designing New Authentication Page',
          spk: 'SPK - 16',
          startDate: '03-06-2023',
          status: 'Inprogress',
          statusClass: 'fw-semibold text-secondary',
          dueDate: '08-06-2023',
          priority: 'Medium',
          priorityClass: 'badge bg-secondary-transparent',
          assignees: [
            { img: faces10 },
            { img: faces15 },
          ],
          checked: true,
        },
        {
          title: 'Documentation For New Template',
          spk: 'SPK - 07',
          startDate: '12-06-2023',
          status: 'New',
          statusClass: 'fw-semibold text-primary',
          dueDate: '25-06-2023',
          priority: 'High',
          priorityClass: 'badge bg-danger-transparent',
          assignees: [
            { img: faces12 },
          ],
          checked: true,
        },
        {
          title: 'Updating Old UI',
          spk: 'SPK - 13',
          startDate: '06-06-2023',
          status: 'Completed',
          statusClass: 'fw-semibold text-success',
          dueDate: '12-06-2023',
          priority: 'Low',
          priorityClass: 'badge bg-success-transparent',
          assignees: [
            { img: faces11 },
            { img: faces1 },
            { img: faces10 },
          ],
          checked: false,
        },
        {
          title: 'Developing New Events In Plugins',
          spk: 'SPK - 20',
          startDate: '14-06-2023',
          status: 'Pending',
          statusClass: 'fw-semibold text-warning',
          dueDate: '19-06-2023',
          priority: 'High',
          priorityClass: 'badge bg-danger-transparent',
          assignees: [
            { img: faces3 },
            { img: faces9 },
          ],
          checked: true,
        },
        {
          title: 'Fixing Minor UI Issues',
          spk: 'SPK - 26',
          startDate: '11-06-2023',
          status: 'Completed',
          statusClass: 'fw-semibold text-success',
          dueDate: '18-06-2023',
          priority: 'Medium',
          priorityClass: 'badge bg-secondary-transparent',
          assignees: [
            { img: faces5 },
            { img: faces14 },
            { img: faces12 },
            { img: faces3 },
          ],
          checked: false,
        },
        {
          title: 'Designing Of New Ecommerce Website',
          spk: 'SPK - 32',
          startDate: '03-06-2023',
          status: 'Inprogress',
          statusClass: 'fw-semibold text-secondary',
          dueDate: '09-06-2023',
          priority: 'Low',
          priorityClass: 'badge bg-success-transparent',
          assignees: [
            { img: faces12 },
            { img: faces6 },
          ],
          checked: false,
        },
      ],
    };
  },
  methods: {
    deleteItem(index: number) {
      this.tasks.splice(index, 1);
    },
  },
});
</script>

<template>
  <div class="card-body">
    <div class="table-responsive">
      <table class="table text-nowrap table-bordered">
        <thead>
          <tr>
            <th>
              <input class="form-check-input check-all" type="checkbox" id="all-tasks" value="" aria-label="..." />
            </th>
            <th scope="col">Task</th>
            <th scope="col">Task ID</th>
            <th scope="col">Assigned Date</th>
            <th scope="col">Status</th>
            <th scope="col">Due Date</th>
            <th scope="col">Priority</th>
            <th scope="col">Assigned To</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index" class="task-list">
            <td class="task-checkbox">
              <input class="form-check-input" type="checkbox" v-model="task.checked" aria-label="..." />
            </td>
            <td>
              <span class="fw-semibold">{{ task.title }}</span>
            </td>
            <td>
              <span class="fw-semibold">{{ task.spk }}</span>
            </td>
            <td>{{ task.startDate }}</td>
            <td>
              <span :class="task.statusClass">{{ task.status }}</span>
            </td>
            <td>{{ task.dueDate }}</td>
            <td>
              <span :class="task.priorityClass">{{ task.priority }}</span>
            </td>
            <td>
              <div class="avatar-list-stacked">
                <span v-for="(assignee, aIndex) in task.assignees" :key="aIndex"
                  class="avatar avatar-sm avatar-rounded">
                  <img :src="assignee.img" alt="img" />
                </span>
                <a v-if="task.assignees.length > 3" class="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                  href="javascript:void(0);">
                  +{{ task.assignees.length - 3 }}
                </a>
              </div>
            </td>
            <td>
              <button class="btn btn-primary-light btn-icon btn-sm" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-title="Edit">
                <i class="ri-edit-line"></i>
              </button>
              <button class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn" @click="deleteItem(index)">
                <i class="ri-delete-bin-5-line"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped></style>