# frozen_string_literal: true

require_relative '../lib/env'
require_relative '../day_six/day_six'

class DaySixTest < Minitest::Test
  def test_part_1_practice
    assert_equal 11, DaySix.new(DaySixInput.practice).solve_part_one
  end

  def test_part_1_real
    assert_equal 6590, DaySix.new(DaySixInput.real).solve_part_one
  end

  def test_part_2_practice
    assert_equal 6, DaySix.new(DaySixInput.practice).solve_part_two
  end

  def test_part_2_real
    assert_equal 3288, DaySix.new(DaySixInput.real).solve_part_two
  end
end
